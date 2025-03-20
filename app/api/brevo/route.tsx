/* eslint-disable @typescript-eslint/naming-convention */
import {NextResponse} from 'next/server';

import type {NextRequest} from 'next/server';

/*****************************************************************************************
 ** Notion API Route
 ** This route handles interactions with Notion database
 ** Features:
 ** - Email validation before submission to Notion
 ** - POST endpoint to add new email entries to the waitlist
 ** - Proper error handling and response formatting
 *****************************************************************************************/

/**
 * Validates if a string looks like a properly formatted email address
 */
function isValidEmail(email: string): boolean {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const {headers} = request;
		// Parse the request body to get the email
		const {email} = await request.json();

		// Get host dynamically
		const host = headers.get('host'); // Includes domain and port (if any)

		// Construct the full URL
		const protocol = headers.get('x-forwarded-proto') || 'http'; // Use https if behind a proxy
		const URL = `${protocol}://${host}`;

		if (!email) {
			console.error('Email is required');
			return NextResponse.json({error: 'Email is required'}, {status: 400});
		}

		// Validate email format
		if (!isValidEmail(email)) {
			console.error('Invalid email format:', email);
			return NextResponse.json({error: 'Please enter a valid email address'}, {status: 400});
		}

		console.log('Adding email to Brevo', email);

		// Add the email to the Notion database
		const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
			method: 'POST',
			headers: {
				'api-key': process.env.BREVO_API_KEY as string,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				includeListIds: [Number(process.env.BREVO_LIST_ID)],
				templateId: Number(process.env.BREVO_TEMPLATE_ID),
				redirectionUrl: `${URL}/?modal=whitelist&step=success`
			})
		});

		console.log('Response', response);

		try {
			if (!response.ok) {
				const result = await response.json();
				console.error('Brevo API error:', result);
				return NextResponse.json(
					{error: 'Failed to add email to Brevo', details: result},
					{status: response.status}
				);
			}
		} catch (error) {
			console.error('Error parsing response:', error);
		}

		return NextResponse.json({success: true, message: 'Email added to Brevo'}, {status: 201});
	} catch (error) {
		console.error('Error adding email to Brevo:', error);
		return NextResponse.json({error: 'Internal server error'}, {status: 500});
	}
}
