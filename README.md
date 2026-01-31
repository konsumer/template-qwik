# Qwik Cloudflare Template

I have a very common usecase, which is tiny frontend/backend app that uses daisyui/qwik, and runs on a Cloudflare worker.

## usage

```sh
npm create cloudflare@latest -- mysite --template=konsumer/template-qwik
```

## I got some strong opinions!

- I don't like typescript (and all the build-junk it adds to a project.) It feels like layers and layers of useless stuff to me.
- Eslint is silly, and requires tons of layers to be usable. I use [prettier](https://prettier.io/) to lint/clean my code. I use what is essentially [standardjs](https://standardjs.com/), but you can tweak prettier, however you like by editing `.prettierrc`. Personally, it's all automated, so I don't have to think about it. Just install whatever you need for prettier-auto-formatting. I use [Zed](https://zed.dev/), but any other editor should be able to do this.
- I try to keep stuff as dev-dependencies, and use `npx` (installs in a global cache, when needed) for any development CLI tools, to mimimize dev-dependencies, and keep node_modules & install-time smaller. I also use `latest` versions in `package.json`, just to keep things up-to-date. If you need to update, run `npx -y rimraf node_modules package-lock.json` then `npm i`. `package-lock.json` will lock-in versions, if you really need that.
- I hate a bunch of demo-content I have to remove, showing how to do stuff I don't want to do. Go read the docs for [vite](https://vite.dev/guide/), [qwik](https://qwik.dev/docs/), [tailwind](https://tailwindcss.com/docs) and [daisy](https://daisyui.com/docs) if you want to do stuff I am not doing.

If you don't agree with anything, feel free to fork it, and make your own! Here is what I did to get the basic thing setup:

```sh
npm create cloudflare@latest -- template-qwik --framework=qwik
cd  template-qwik
npm i -D tailwindcss daisyui @tailwindcss/typography
```

Then I removed all the junk, and refreshed versions in package.json.
