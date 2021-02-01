import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Card
          bg="info"
          //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" , height: "7rem"}}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body><center>
          <Card.Title> Phases </Card.Title>
            </center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "7rem" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
              <center>
            <Card.Title>
                Journey Stages
              </Card.Title></center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "7rem" }}
          text = {"light"}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
          <center>  <Card.Title> Customer Actions </Card.Title></center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          bg="danger"
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "7rem" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
           <center> <Card.Title> Storyboard </Card.Title></center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          bg="warning"
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "7rem"}}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <center><Card.Title> Customer Thinking </Card.Title></center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          bg="success"
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "7rem" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <center><Card.Title> Journey Stages </Card.Title></center>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Sidebar;
