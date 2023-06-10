import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../module/Footer.module.scss";
import { FormattedMessage } from "react-intl";

const FooterCol = ({ children }) => (
	<Col className="col-6 col-sm-3">
		<ul>{children}</ul>
	</Col>
);

export const Footer = () => {
	return (
		<div className={`footer me-5 ${styles.footer}`}>
			<Container className="text-center" fluid>
				<Row>
					<FooterCol>
						<li>
							<Link href="/about">
								<FormattedMessage id="about" />
							</Link>
						</li>
						<li>
							<Link href="/contacts">
								<FormattedMessage id="contact" />
							</Link>
						</li>
					</FooterCol>
					<FooterCol>
						<li>
							<Link href="/">
								<FormattedMessage id="footer.policy" />
							</Link>
						</li>
						<li>
							<Link href="/">
								<FormattedMessage id="footer.terms" />
							</Link>
						</li>
						<li>
							<Link href="/">
								<FormattedMessage id="footer.cookie" />
							</Link>
						</li>
					</FooterCol>
					<FooterCol>
						<li>
							<FormattedMessage id="footer.follow" />
						</li>
						<li>
							<Link href="https://instagram.com">Instagram</Link>
						</li>
						<li>
							<Link href="https://twitter.com">Twitter</Link>
						</li>
						<li>
							<Link href="https://facebook.com">Facebook</Link>
						</li>
					</FooterCol>
					<FooterCol>
						<li>
							<Link href="/home">
								<img src="/images/logo.svg" alt="Logo" width="70" />
							</Link>
						</li>
						<li>
							<p className="pt-5">
								Ⓒ{new Date().getFullYear()}thestudent
							</p>
						</li>
					</FooterCol>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
