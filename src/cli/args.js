export const parseArgs = () => {
    const response = [];
    const args = process.argv.slice(2);
    args.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            response.push(`${arg.slice(2)} is ${args[index + 1]}`);
        }
    });
    console.log(response.join(', '));
};

parseArgs();
