const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

const Company = require("../models/Company");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the companys using: GET "/api/companys/getuser". Login required
router.get("/fetchallcompany", fetchuser, async (req, res) => {
  try {
    const company = await Company.find({ user: req.user.id });
    res.json(company);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new company using: POST "/api/companys/addcompany". Login required

router.post(
  "/addcompany",
  // fetchuser

  [
    body("nature", "Enter a valid company nature").isLength({ min: 5 }),
    body("additional", "Enter a valid company additional").isLength({ min: 5 }),
    body("ceo", "Enter a valid company ceo").isLength({ min: 5 }),
    body("aboutUs", "Enter a valid company about").isLength({ min: 25 }),
    body("companyName", "Enter a valid company name").isLength({ min: 3 }),
    body("firstName", "Enter a valid firstName").isLength({ min: 3 }),
    body("lastName", "Enter a valid lastName").isLength({ min: 3 }),
    body("Address", "Enter a valid Address").isLength({ min: 5 }),
    body("city", "Enter a valid city").isLength({ min: 3 }),
    body("state", "Enter a valid state").isLength({ min: 3 }),
    body("pincode", "Enter a valid pincode").isLength({ min: 3 }),
    body("gstNumber", "Enter a valid gstNumber").isLength({ min: 3 }),
    body("crn", "Enter a valid company registration number").isLength({
      min: 3,
    }),
    body("noEmployes", "Enter a valid noEmployes").isLength({ min: 2 }),
    body("yearEstablishment", "Enter a valid yearEstablishment").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    let success = false;
    const url = req.protocol + "://" + req.get("host");
    try {
      const {
        nature,
        additional,
        ceo,
        aboutUs,
        companyName,
        firstName,
        lastName,
        Address,
        city,
        state,
        pincode,
        gstNumber,
        crn,
        noEmployes,
        yearEstablishment,
        legalStatus,
      } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let findcompany = await Company.findOne({
        companyName: req.body.companyName,
      });
      if (findcompany) {
        return res.status(400).json({
          success,
          error: "Sorry a company with this name already exists",
        });
      }
      const company = new Company({
        nature,
        additional,
        ceo,
        aboutUs,
        companyName,
        firstName,
        lastName,
        Address,
        city,
        state,
        pincode,
        gstNumber,
        crn,
        noEmployes,
        yearEstablishment,
        legalStatus,
        // user: req.user.id,
      });
      const savedCompany = await company.save();

      success = true;
      res.json({ success, savedCompany });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing company using: PUT "/api/companys/updatecompany". Login required
router.put("/updatecompany/:id", fetchuser, async (req, res) => {
  const {
    nature,
    additional,
    ceo,
    aboutUs,
    companyName,
    firstName,
    lastName,
    Address,
    city,
    state,
    pincode,
    gstNumber,
    crn,
    noEmployes,
    yearEstablishment,
    legalStatus,
  } = req.body;
  try {
    // Create a newcompany object
    const newCompay = {};
    if (nature) {
      newCompay.nature = nature;
    }
    if (additional) {
      newCompay.additional = additional;
    }
    if (ceo) {
      newCompay.ceo = ceo;
    }
    if (aboutUs) {
      newCompay.aboutUs = aboutUs;
    }
    if (companyName) {
      newCompay.companyName = companyName;
    }
    if (firstName) {
      newCompay.firstName = firstName;
    }
    if (lastName) {
      newCompay.lastName = lastName;
    }
    if (Address) {
      newCompay.Address = Address;
    }
    if (city) {
      newCompay.city = city;
    }
    if (state) {
      newCompay.state = state;
    }
    if (pincode) {
      newCompay.pincode = pincode;
    }
    if (gstNumber) {
      newCompay.gstNumber = gstNumber;
    }
    if (crn) {
      newCompay.crn = crn;
    }
    if (noEmployes) {
      newCompay.noEmployes = noEmployes;
    }
    if (yearEstablishment) {
      newCompay.yearEstablishment = yearEstablishment;
    }
    if (legalStatus) {
      newCompay.legalStatus = legalStatus;
    }

    // Find the company to be updated and update it
    let company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send("Not Found");
    }

    if (company.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    company = await Company.findByIdAndUpdate(
      req.params.id,
      { $set: newCompay },
      { new: true }
    );
    res.json({ company });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an existing company using: DELETE "/api/companys/deletecompany". Login required
router.delete("/deletecompany/:id", fetchuser, async (req, res) => {
  try {
    // Find the company to be delete and delete it
    let company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Company
    if (company.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    company = await Company.findByIdAndDelete(req.params.id);
    res.json({ Success: "Company has been deleted", company: company });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
