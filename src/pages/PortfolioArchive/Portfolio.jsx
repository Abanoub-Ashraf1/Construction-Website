import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "./Protfolio.css";
import Footer from "../../components/Footer";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    category: "",
    image: null,
  });
  const [editingProject, setEditingProject] = useState(null);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setNewProject({ ...newProject, image: event.target.result }); // Save base64 image string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProject !== null) {
      // Update project
      const updatedProjects = projects.map((project) =>
        project.id === editingProject.id
          ? { ...newProject, id: editingProject.id }
          : project
      );
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      setEditingProject(null);
    } else {
      // Add new project
      const newEntry = { ...newProject, id: Date.now() }; // Assign a unique id using timestamp
      const updatedProjects = [...projects, newEntry];
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
    }

    setNewProject({ title: "", category: "", image: null }); // Reset form
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setNewProject({
      title: project.title,
      category: project.category,
      image: project.image,
    });
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <>
      <Navigation />
      <Topimage
        text1="Portfolio Archive"
        image={heroImage}
        text2="Home / Portfolio Archive"
      />
      <section className="projects portfolio">
        <div className="container">
          <div className="project-text text-center">
            <h3>Our Works</h3>
            <h2>Our Special Projects</h2>
          </div>

          <form onSubmit={handleSubmit} className="mb-5">
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={newProject.category}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Project Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-control"
                required={!editingProject}
              />
              {newProject.image && (
                <img
                  src={newProject.image}
                  alt="Preview"
                  className="img-preview mt-3"
                />
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              {editingProject ? "Update Project" : "Add Project"}
            </button>
          </form>

          <div className="row">
            {projects.map((project) => (
              <div className="col-lg-3" key={project.id}>
                <div className="item">
                  <div className="overlay"></div>
                  <div className="item-text">
                    <h3>{project.category}</h3>
                    <h2>{project.title}</h2>
                    <span className="shap">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="shap"
                        onClick={() => handleEdit(project)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="shap"
                        onClick={() => handleDelete(project.id)}
                      />
                    </span>
                  </div>
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
