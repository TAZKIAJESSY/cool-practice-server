const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");

const router = new Router();

//update a space
router.patch("/:id", auth, async (req, res, next) => {
  try {
    const space = await Space.findByPk(req.params.id);
    if (space.userId == req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }

    const { title, description, backgroundColor, color } = req.body;

    await space.update({ title, description, backgroundColor, color });

    return res.status(200).send({ space });
  } catch (e) {
    next(e.message);
  }
});
// http patch :4000/spaces/4 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTYxNjQyOTIyMSwiZXhwIjoxNjE2NDM2NDIxfQ.uLRbS4Ltuwxf_1syF7HWvv6leyAL8jnsE-sJtdtmAj4" title="How to become a chef" description="test your ingredients right away"
module.exports = router;
