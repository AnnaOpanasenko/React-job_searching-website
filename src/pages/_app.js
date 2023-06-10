import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import { getDefaultBrowserLanguage, getLanguageOverride, getMessages } from "../i18n";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
	const [userLanguage, setUserLanguage] = useState("en");
	useEffect(() =>
		setUserLanguage(getLanguageOverride() || getDefaultBrowserLanguage())
	);
	const messages = getMessages(userLanguage);

	return (
		<IntlProvider locale={userLanguage} messages={messages}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</IntlProvider>
	);
};

export default App;
