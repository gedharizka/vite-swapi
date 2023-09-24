import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { detailPeople } from "../service/people";
import Header from "../components/Headers";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup
} from "reactstrap";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const fetchData = async () => {
    const res = await detailPeople(id);
    const status = res?.status;
    if (status === 200) {
      setData(res?.data);
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
          <Col className="d-flex justify-center px-auto" md="12" xs="12">
            <Card className="mb-3 w-3/6">
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  {data?.name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
                  {data?.gender}
                </CardSubtitle>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Height</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.height}</Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Mass</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.mass}</Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Hari Color</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.hair_color}</Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Skin Color</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.skin_color}</Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Eyes Color</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.eye_color}</Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <span>Brith Year</span>
                    <span className="float-right">:</span>
                  </Col>
                  <Col className="px-0">{data?.birth_year}</Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <p className="textlg mb-0">Films</p>

                    <ButtonGroup>
                      {data?.films?.length !== 0 ? (data?.films?.map((item, index) => {
                        return (
                          <span key={item} className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            {index + 1}
                          </span>
                        );
                      })) : "-"}
                    </ButtonGroup>

                    <p className="textlg mb-0">Species</p>

                    <ButtonGroup>
                      {data?.species?.length !== 0
                        ? data?.species?.map((item, index) => {
                            return (
                              <span key={item} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                {index + 1}
                              </span>
                            );
                          })
                        : "-"}
                    </ButtonGroup>
                  </Col>
                  <Col>
                    <p className="textlg mb-0">Vehicles</p>

                    <ButtonGroup>
                      {data?.vehicles?.length !== 0
                        ? data?.vehicles?.map((item, index) => {
                            return (
                              <span key={item} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                {index + 1}
                              </span>
                            );
                          })
                        : "-"}
                    </ButtonGroup>
                    <p className="textlg mb-0">Starships</p>

                    <ButtonGroup>
                      {data?.starships?.length !== 0
                        ? data?.starships?.map((item, index) => {
                            return (
                              <span key={item} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                {index + 1}
                              </span>
                            );
                          })
                        : "-"}
                    </ButtonGroup>
                  </Col>
                </Row>

                <Button
                  className="w-1/6 float-right"
                  color="primary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </CardBody>
            </Card>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
