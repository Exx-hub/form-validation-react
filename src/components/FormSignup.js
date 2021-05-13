import React from "react";
import { useForm } from "../customhooks/useForm";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function FormSignup({ submitForm }) {
	const [values, handleSubmit, handleChange, errors] = useForm(submitForm);

	return (
		<Container className="mt-5" fluid>
			<Row>
				<Col>
					<p style={{ textAlign: "left" }}>
						Get started with us today! Create your account by filling out the
						info below.
					</p>
					<Form noValidate autoComplete="off" onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>UserName</Form.Label>
							<Form.Control
								type="text"
								name="username"
								placeholder="enter username"
								value={values.username}
								onChange={handleChange}
							/>
							<Form.Text>{errors.username && errors.username}</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="enter email"
								value={values.email}
								onChange={handleChange}
								autoComplete="off"
							/>
							<Form.Text>{errors.email && errors.email}</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="enter password"
								value={values.password}
								onChange={handleChange}
								autoComplete="off"
							/>
							<Form.Text>{errors.password && errors.password}</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="confirm"
								placeholder="confirm password"
								value={values.confirm}
								onChange={handleChange}
								autoComplete="off"
							/>
							<Form.Text>{errors.confirm && errors.confirm}</Form.Text>
						</Form.Group>

						<Button variant="primary" type="submit">
							Sign Up
						</Button>
						<p>
							Already have an account? Login <a href="/">here</a>
						</p>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default FormSignup;
