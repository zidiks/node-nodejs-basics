export const parseEnv = () => {
    const response = [];
    Object.keys(process.env).forEach((key) => {
        if (key.includes('RSS_')) {
            response.push(`${key}=${process.env[key]}`);
        }
    });
    console.log(response.join('; '));
};

parseEnv();
