const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3500',
  'https://hacker-news-paavveel.onrender.com',
];

export const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200,
};
