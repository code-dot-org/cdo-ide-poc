# CDO IDE

This is an extremely early POC. There is a lot of iteration to do.

## Getting started.

This repo is on the honor system. Use PRs, look to history, behavior yourself.

Right now this code is hanging out in a separate repo. It'll get merged back into cdo main in a few weeks.
Until then, it hangs out in your package.json file under `cdo-ide-poc`

You an update it with:

```
yarn add cdo-ide-poc@git+https://github.com/code-dot-org/cdo-ide-poc.git#GITHUBHASH
```

obviously, if you're doing a lot of local development with it, you may just want to `yarn link` the package into place.

## Working with the code

```
// get the full IDE layout
const {CDOIDE, ConfigType, ProjectType} = import "@cdoide";

const config : ConfigType = {...}
const project : ProjectType = {...}

// put it onto your page somewhere.
<CDOIDE
  config={config}
  project={project}
  setConfig={setConfig}
  setProject={setProject}
/>
```

Check the `types.ts` file for typing, but the tl;dr is that the `project` prop is assumed to be project specific data - that is to say, a list of files and folders and other associated metadata.

The `config` prop is for layout of the IDE itself - which panes to show, how to configure some of them, instructions for the lesson, and so on.

Look towards `App.tsx` for an example wrapper with some sample data involved.

## What does this do

It lays out a full IDE from some of the upper grade POC docs, but all it actually implements is a file browser, editor (with tabs for open files) and preview of HTML pages w/CSS. Everything else is placeholders.

## What does this not do

Anything else.

- It's ugly as sin. There's little in the way of styling, it needs to be re-written into a pretty component library.
- Work will need to be done on the preview to make sure it does everything we may need it to do. For example, right now it doesn't have a concept of knowing where to find images or link to other pages in the project.
- Other bits of proposed functionality aren't implemented - such as a search box or more robust instructions.
- The input structure is somewhat arbitrary. Maybe we want to adapt to a pre-existing project.json structure? Maybe we want to redefine it? Totally plausible.

## Where do I start?

- Take a look at `App.tsx` for the wrapper code that just lays out an IDE with some pre-defined `config` and `project` values.
- In the `CDOIDE` directory, `CDOIDE/CDOIDE.tsx` is your starting point with the overall layout.
- There are `left-pane`, `center-pane`, `right-pane` folders laying out the content within each of them.
- The center pane contains the `InternalEditor.tsx` component which is the interface to `CodeMirror` and the `FileNav.tsx` component which gives the file tabs at the top.
- The left pane contains the `Files.tsx` component which sets up the file browser.
- _Don't put any external CDO end points into here._ The `CDOIDE` folder should be completely agnostic of anything on our backend (ideally, at least), and we should only interact with the rest of our systems by handing in data and callbacks (i.e., `config`, `project`, `setProject`, `setConfig`). If we need more interaction, we should skew towards enhancing that interface instead of tightly coupling code internally.
