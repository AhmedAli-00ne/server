let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let studentSchema = require('../models/Student')

// CREATE Student
router.route('/register').post((req, res, next) => {
  console.log(req.body);
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/login/:email').get((req, res, next) => {
  studentSchema.findOne({ email: req.params.email }, (error, data) => {
    if (error) {
      return next(error); // Pass the error to the error-handling middleware
    } else if (!data) {
      return res.status(404).json({ message: 'Student not found' }); // Handle case when student is not found
    } else {
      res.json(data); // Send the student data as a JSON response
    }
  });
});

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
