"use client";

import {
	ThemeProvider as NextThemeProvider,
	type ThemeProviderProps,
} from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({
	children,
	...props
}: ThemeProviderProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>; // Render children without ThemeProvider during SSR
	}

	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
