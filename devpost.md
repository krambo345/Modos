# The End..? [Dev Post 4]
With the guide finally being done, I announce modOS v1.0.0 Cambaz. Before I nerd out about everything added, here is more information about Mor ve Ötesi, the band behind Cambaz:
https://en.wikipedia.org/wiki/Mor_ve_%C3%B6tesi

## Why is modOS different?
Well, throughout the path of following the guide and making modOS, I completely rejected the idea of a hard-coded anything. Sure, it might be open-source, but what is the point of open-source if changing the source is going to take many hours of coding? modOS competes against a perminent webOS. The following features highlight how modOS achieves that:
- modOS does not have any hard-coded applications, bar, desktop, etc.
- Every app is found in a JSON file(apps.json located in /base/system/) which can be modified to install any application you want, easily! Currently this step is manual, and there is no official repository of verified applications. However, that is subject to change.
- Bartender(the bar system of modOS) is a javascript file(bartender.js found in /base/system/bartender.js) which can be modified to make the bar whatever you want! 
- WER(Window Manager for modOS) is a script that inserts window functions such as the minimize and close buttons alongside the name of the window, icon, and movement system. The whole script is launched with `initwindow(win)` where win is the main window element.
- Got confused with the `initwindow(win)` command? Not to worry, modOS comes with the exec command, which follows the format `exec(appname, icon)`, where you can determine the name of the application(**REQUIRED**) and it's icon(**NOT REQUIRED**). Whenever the command is ran, the script(exec.js found in /base/system/) looks through apps.json and pulls the necessary content and scripts, giving you a fully functional app. **Note:** If you decide to use a custom icon with an existing app, exec.js will still use the icon used in the database to maintain the developers creativity!
- So are you even more lazy? Cuz' modOS desktop shows every app on apps.json for easier access. All you need is the ability to double click the app you want! **Note:** Psst! There are hidden applications. You need to run `showhidden()` to show them, and `hidehidden()` if you would like to hide them back.
- You can customize modOS off of the base css by editing config.css(config.css found in /system/user/)
## Default Applications List
- App Template: It is a template for you to make your own app! (hidden by default)
- run: An alternative for the developer console that comes with modern browsers. A great option for mobile users or older, unsupported, browsers.
- Release Notes: Your updated news for modOS!
- Theme Song: The theme song of modOS! Plays Cambaz by Mor ve Ötesi.
## Future Updates
- A signup/login system is planned to be added for a cross-platform sync ability(e.g. for your apps, settings, customizations, etc). Do not worry, this will be completely optional and you can still use modOS as a guest.
- modOS developer mode: A way for you to build applications for you and others on modOS!
- Window minimization: Currently, windows *do* get minimized. However, you really can not un-minimize them without running the command `document.querySelector(".win").style.display="block"`. Which is really unrelaible and annoying.
- More applications: You will use modOS developer mode to develop applications for the ecosystem. No more work for me.