import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, gitlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <span>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Website Link</a>
          </span>
          <br></br>
          <span>
            <a href={gitlink} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Github Link</a>
          </span>
        </div>
      </div>
    </Col>
  )
}
