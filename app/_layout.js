import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	// const [fontsLoaded] = useFonts({
	// 	DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
	// 	DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
	// 	DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	// });

	const loadFonts = async () => {
		await Font.loadAsync({
			DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
			DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
			DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
		});
	};

	const onLayoutRootView = useCallback(async () => {
		if (loadFonts) {
			await SplashScreen.hideAsync();
		}
	}, [loadFonts]);

	if (!loadFonts) return null;

	return <Stack onLayout={onLayoutRootView} />;
}