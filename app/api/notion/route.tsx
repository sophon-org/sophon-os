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
		// Parse the request body to get the email
		const {email} = await request.json();

		if (!email) {
			console.error('Email is required');
			return NextResponse.json({error: 'Email is required'}, {status: 400});
		}

		// Validate email format
		if (!isValidEmail(email)) {
			console.error('Invalid email format:', email);
			return NextResponse.json({error: 'Please enter a valid email address'}, {status: 400});
		}

		// Add the email to the Notion database
		const response = await fetch('https://api.notion.com/v1/pages', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NOTION_BEARER_TOKEN}`,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Notion-Version': '2022-06-28',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				parent: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					database_id: process.env.NOTION_DATABASE_ID as string
				},
				properties: {
					// Assuming the column name is "email" in your Notion database
					email: {
						type: 'email',
						email: email
					}
				}
			})
		});

		const result = await response.json();

		if (!response.ok) {
			console.error('Notion API error:', result);
			return NextResponse.json(
				{error: 'Failed to add email to database', details: result},
				{status: response.status}
			);
		}

		return NextResponse.json({success: true, message: 'Email added to waitlist'}, {status: 201});
	} catch (error) {
		console.error('Error adding email to Notion:', error);
		return NextResponse.json({error: 'Internal server error'}, {status: 500});
	}
}
