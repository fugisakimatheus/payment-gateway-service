import rateLimit from 'express-rate-limit'

const defaultMinutes = 10
const defaultMaxRequests = 100

export const getRouteRequestsLimiterByMinutes = (
  minutes = defaultMinutes,
  maxRequests = defaultMaxRequests,
) => {
  return rateLimit({
    windowMs: minutes * 60 * 1000, // X minutes
    max: maxRequests, // Limit each IP to specified requests per `window` (here, per specified minutes)
    statusCode: 429,
    message: {
      message: `Too many requests from this IP, try again after ${minutes} minutes`,
    },
  })
}
