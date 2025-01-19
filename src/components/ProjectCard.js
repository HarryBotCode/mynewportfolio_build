import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, gitlink, video, onWatchVideo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <img src={imgUrl} alt={title} style={{ width: "100%", height: "400px", objectFit: "cover" }} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
         {link !== null && (
           <span>
           <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
             Website Link
           </a>
         </span>
         )}
          <br></br>
          {gitlink !== null && (
            <span>
            <a href={gitlink} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              Github Link
            </a>
          </span>
          )}
          <br></br>
          {video && (
            <Button
            variant="primary"
            className="mt-3"
            onClick={onWatchVideo}
            style={{ display: 'block', margin: 'auto' }}
            >
            Watch Demo
            </Button>
          )}
         
        </div>
      </div>
    </Col>
  );
};
