import { useEffect, useState } from "react";
import { getPeople, nextPage } from "../service/people";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonGroup,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../components/Headers";

function Home() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const getId = (url) => {
    const parts = url.split("/");

    const uniqueId = parts[parts.length - 2];
    return uniqueId;
  };
  const fetchData = async () => {
    const res = await getPeople();
    const status = res?.status;
    if (status === 200) {
      setData(res?.data?.results);
      setNext(res?.data?.next);
      setPrev(res?.data?.previous);
    }
  };

  const handleNextPage = async (url) => {
    const data = await nextPage(url);
    const status = data?.status;
    if (status === 200) {
      console.log("data update", data?.data?.results);
      setData(data?.data?.results);
      setNext(data?.data?.next);
      setPrev(data?.data?.previous);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header>Star Wars</Header>

      <Container className="mt-10">
        <Row>
          {data.map((item) => (
            <Col
              key={item?.name}
              className="d-flex justify-center px-auto"
              md="12"
              xs="12"
            >
              <Link
                className="flex w-full justify-center"
                to={`/people/${getId(item?.url)}`}
              >
                <Card className="mb-3 w-3/12">
                  <CardBody>
                    <CardTitle tag="h5" className="text-center">
                      {item?.name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted text-center"
                      tag="h6"
                    >
                      {item?.gender}
                    </CardSubtitle>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Height</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.height}</Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Mass</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.mass}</Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Hari Color</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.hair_color}</Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Skin Color</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.skin_color}</Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Eyes Color</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.eye_color}</Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <span>Brith Year</span>
                        <span className="float-right">:</span>
                      </Col>
                      <Col className="px-0">{item?.birth_year}</Col>
                    </Row>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row className="flex justify-center mx-auto mb-3 w-3/12">
          <ButtonGroup>
            {prev === null ? (
              <Button color="primary" disabled>
                Back
              </Button>
            ) : (
              <Button color="primary" onClick={() => handleNextPage(prev)}>
                Back
              </Button>
            )}
            {next === null ? (
              <Button color="primary" disabled>
                Next
              </Button>
            ) : (
              <Button color="primary" onClick={() => handleNextPage(next)}>
                Next
              </Button>
            )}
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
}

export default Home;
