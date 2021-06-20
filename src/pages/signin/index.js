import Head from 'next/head';
import styles from './Signin.module.css';
import { useRouter } from 'next/router';

export default function Signin() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<Head>
				<title>Buy 1 Take 1</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.body}>
				<div className={styles.landing_page}>
					<form
						className={styles.form_signin}
						onSubmit={(e) => {
							e.preventDefault;
						}}>
						<h1 className={styles.heading_text}>Welcome back!</h1>
						<h3 className={styles.subheading_text}>
							{`We're glad to see you again!`}
						</h3>
						<h5 className={styles.label_text}>
							Email or Phone Number
						</h5>
						<div className={styles.input_container}>
							<input type='text' className={styles.input_form} />
						</div>
						<h5 className={styles.label_text}>Password</h5>
						<div className={styles.input_container}>
							<input
								type='password'
								className={styles.input_form}
							/>
						</div>
						<div className={styles.button_tertiary_container}>
							<button className={styles.button_tertiary}>
								Forgot Password?
							</button>
						</div>
						<button type='submit' className={styles.button_primary}>
							Sign In
						</button>
						<button
							type='button'
							className={styles.button_secondary}
							onClick={(e) => {
								e.preventDefault;
								router.push('/');
							}}>
							Go Back Home
						</button>
						<div className={styles.button_tertiary_container}>
							{`Don't have an account?`}
							<button
								type='button'
								className={styles.button_tertiary}
								onClick={(e) => {
									e.preventDefault;
									router.push('/signup');
								}}>
								Signup
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
