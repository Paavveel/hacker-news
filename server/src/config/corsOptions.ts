const allowedOrigins = ['http://localhost:3000', 'http://localhost:3500'];

export const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200,
};
