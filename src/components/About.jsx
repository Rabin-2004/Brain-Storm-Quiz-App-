import { Typography, Box, Grid } from "@mui/material";
import MainMenu from "./MainMenu";

const About = () => {
    return (
        <>
        <MainMenu />
        <Box sx={{ ml: 3, mr: 3, mt: 10 }}>
            <Typography variant="h5" gutterBottom>
                Brain Storm🧠
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to the Brain Storm, a fun and interactive quiz platform to test your knowledge across various topics and difficulty levels! Designed with simplicity and functionality in mind, this app offers an engaging way to learn while keeping track of your progress.
            </Typography>

            <Grid container spacing={4} alignItems="flex-start">
                {/* Left Column */}
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Features 🚀
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Customizable Quizzes:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Choose the number of questions and difficulty level (Easy, Medium, Hard) to tailor your quiz experience.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Real-Time Feedback:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    See your accuracy and score at the end of each quiz.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Answer Review Mode:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Compare your answers with the correct ones to improve and learn.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Responsive Design:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Optimized for all devices—whether you're on a desktop, tablet, or mobile.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    User-Friendly Interface:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Built with Material UI for a sleek and modern look.
                                </Typography>
                            </li>
                        </ul>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Technologies Used 💻
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Frontend Framework:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    React.js
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Styling:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Material UI and CSS
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    API Integration:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Open Trivia Database (OpenTDB) for fetching quiz questions
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    State Management:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    React Context API
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Routing:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    React Router DOM
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            How It Works 🛠️
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Start the Quiz:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Select the desired number of questions and difficulty level.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Answer Questions:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Each question provides multiple-choice options.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Submit Answers:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    After completing the quiz, view your score, accuracy, and number of correct answers.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Review Answers:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Check which questions you answered correctly and learn from your mistakes.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" gutterBottom>
                                    Return Home:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Reset your preferences and start a new quiz anytime.
                                </Typography>
                            </li>
                        </ul>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Developed By:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            I am Rabin Poudyal, a student currently pursuing a Bachelor's degree in Computer Science and Information Technology. I made this project as a hobby in my free time. The source code of this project can be found on my GitHub profile: <a href="https://github.com/Rabin-2004/Brain-Storm-Quiz-App-">Link to my GitHub</a>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default About;
