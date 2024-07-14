import chalk, { ChalkInstance, supportsColor } from "chalk";

const useColor = supportsColor && !process.env.NO_COLOR;

const identity = <T>(x: T) => x;
const safe = (style: ChalkInstance) => (useColor ? style : identity);

export const underline = safe(chalk.underline);
export const bold = safe(chalk.bold);

export const error = safe(chalk.red);
export const warning = safe(chalk.yellow);
export const info = safe(chalk.blue);