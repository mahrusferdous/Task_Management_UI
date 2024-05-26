import MyNavbar from "./MyNavbar";
import { Carousel, Container } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <MyNavbar />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Carousel data-bs-theme="light">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/4635743.jpg"
                            alt="Card image cap"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpapercave.com/wp/wp9517070.jpg"
                            alt="Card image cap"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/3239444.jpg"
                            alt="Card image cap"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Home;
