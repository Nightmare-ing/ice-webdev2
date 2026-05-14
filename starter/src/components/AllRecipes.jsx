import { useEffect, useState } from "react";
import Recipe from "./Recipe";

import Stopwatch from "../utils/Stopwatch";

Stopwatch.start();

import { Row, Col, Container } from "react-bootstrap";
export default function AllRecipes(props) {
    // Is there a better way to do this? We'll explore this today!
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Which fetch will complete first? No one knows!

        fetch("https://cs571.org/rest/s25/ice/all-recipes", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to Badger Recipes!</h1>
            <Container>
                <Row>
                    {recipes.length > 0 ? (
                        recipes.map((r) => (
                            <Col xs={12} md={6} lg={3} key={r.name}>
                                <Recipe {...r} />
                            </Col>
                        ))
                    ) : (
                        <p>Still Loading...</p>
                    )}
                </Row>
            </Container>
        </div>
    );
}
