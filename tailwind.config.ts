import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				sm: '1.5rem',
				lg: '2.5rem',
				xl: '3rem',
			},
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				serif: ['Newsreader', 'Georgia', 'serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			letterSpacing: {
				label: '0.2em',
				kicker: '0.28em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cream: 'hsl(var(--cream))',
				sand: 'hsl(var(--sand))',
				sage: {
					DEFAULT: 'hsl(var(--sage))',
					deep: 'hsl(var(--sage-deep))',
				},
				terracotta: 'hsl(var(--terracotta))',
				chocolate: {
					DEFAULT: 'hsl(var(--chocolate))',
					soft: 'hsl(var(--chocolate-soft))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) + 1px)',
				sm: 'var(--radius)'
			},
			backgroundImage: {
				'gradient-sage': 'var(--gradient-sage)',
			},
			boxShadow: {
				editorial: 'var(--shadow-editorial)',
				soft: 'var(--shadow-soft)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'fade-rise': {
					from: { opacity: '0', transform: 'translateY(14px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.28s cubic-bezier(0.32, 0.72, 0.24, 1)',
				'accordion-up': 'accordion-up 0.28s cubic-bezier(0.32, 0.72, 0.24, 1)',
				marquee: 'marquee 46s linear infinite',
				'fade-rise': 'fade-rise 0.7s cubic-bezier(0.32, 0.72, 0.24, 1) both',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
