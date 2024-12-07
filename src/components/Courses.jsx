import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid
} from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 459632, name: 'React Basics', description: 'Learn the fundamentals of React.js and build interactive UIs.', cost: 5000 },
    { id: 596458, name: 'JavaScript Advanced', description: 'Dive deeper into JavaScript concepts like closures, promises, and async/await.', cost: 6000 },
    { id: 239856, name: 'Python for Data Science', description: 'Explore Python libraries like Pandas, NumPy, and Matplotlib for data analysis.', cost: 7000 },
  ]);

  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCourse = () => {
    const courseId = prompt('Enter Course ID:');
    const courseName = prompt('Enter Course Name:');
    const description = prompt('Enter Course Description:');
    const cost = prompt('Enter Cost to Register:'); // New field for cost

    if (courseId && courseName && description && cost) {
      const newCourse = {
        id: parseInt(courseId), // Convert to integer
        name: courseName,
        description: description,
        cost: parseFloat(cost), // Convert to float for the cost
      };
      setCourses([...courses, newCourse]);
    } else {
      alert('Please provide Course ID, Course Name, Description, and Cost to Register');
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Courses
      </Typography>

      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Search Courses"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addCourse}
            sx={{ height: '100%' }}
          >
            Add New Course
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Course ID</strong></TableCell>
              <TableCell><strong>Course Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Cost to Register</strong></TableCell> {/* Added column for cost */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course, index) => (
              <TableRow key={course.id} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>₹{course.cost.toFixed(2)}</TableCell> {/* Displaying cost in Rupees */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Courses;
