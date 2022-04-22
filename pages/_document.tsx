import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<body>
					<Head></Head>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheet = new ServerStyleSheet();
	const materialSheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					sheet.collectStyles(materialSheets.collect(<App {...props} />)),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [
				<React.Fragment key={'key'}>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</React.Fragment>,
			],
		};
	} finally {
		sheet.seal();
	}
};