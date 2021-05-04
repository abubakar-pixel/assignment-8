const server = require("../server");
const chai = require("chai");
const chaiHTTP = require("chai-http");

//styling method
chai.should();

//moiddleware
chai.use(chaiHTTP);

describe("Testing post controller", () => {
  describe("GET ALL POST", () => {
    it("should return all posts", (done) => {
      chai
        .request(server)
        .get("/posts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });

    it("should not return all posts", (done) => {
      chai
        .request(server)
        .get("/posts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });
  });

  describe("Get single post", () => {
    it("Should return single Post", (done) => {
      const postId = "608181b5251a073078a550fb";
      chai
        .request(server)
        .get(`/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          done();
        });
    });

    it("Should not return single Post", (done) => {
      const postId = "608181b5251a073078a550fb";
      chai
        .request(server)
        .get(`/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("UPDATE single post", () => {
    it("Should update a post", () => {
      const postId = "60818214d05cae25744dc848";
      const body = {
        content: "Updated First Post Content",
      };

      chai
        .request(server)
        .patch(`/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
        });

      done();
    });
  });
});
