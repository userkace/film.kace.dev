# film.kace.dev
film.kace.dev is an online streaming website for movies and tv shows. <br>
a predecessor to the late movie-web.

## philosophy
"culture shouldn't exist only for those who can afford it."

## features
- automatic saving of progress - optionally synced to an account.
- bookmark shows or movies, keep track of what you want to watch.
- minimalistic interface that only shows whats required - no algorithm to consume you.
- no ads! - enjoy ad free content watching.

## extension
due to the removal of the extension from both chromium and firefox the extension must now be installed locally. <br>
extension installation guide can be found [here](https://github.com/userkace/film-ext).

## disclaimer
film.kace.dev does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. film.kace.dev is not responsible for any media files shown by the video providers.

## technologies

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![vite](https://img.shields.io/badge/Vite-0f0f0f?style=for-the-badge&logo=vite&logoColor=ffca22)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## links And resources
| service        | link                                                             | source code                                              |
|----------------|------------------------------------------------------------------|----------------------------------------------------------|
| Sudo-Flix Docs | [sudo-docs](https://docs.undi.rest)                          | [source code](https://github.com/sussy-code/docs)        |
| Extension      | [extension](https://docs.undi.rest/extension)                | [source code](https://github.com/sussy-code/browser-ext) |
| Proxy          | [sudo-proxy](https://sudo-proxy.up.railway.app)              | [source code](https://github.com/sussy-code/sudo-proxy)  |             
| Backend        | [sudo-backend](https://backend.undi.rest)                    | [source code](https://github.com/sussy-code/backend)     |
| Frontend       | [sudo-flix](https://docs.undi.rest/instances)                | [source code](https://github.com/sussy-code/smov)        |
| Weblate        | [sudo-weblate](https://docs.undi.rest/links/weblate)         | [source code](https://github.com/sussy-code/docs)        |

## running Locally
Type the following commands into your terminal / command line to run Sudo-Flix locally
```bash
git clone https://github.com/sussy-code/smov.git
cd smov
git pull
pnpm install
pnpm run dev
```
Then you can visit the local instance [here](http://localhost:5173) or, at local host on port 5173.

## updating a sudo-flix Instance
To update a sudo-flix instance you can type the below commands into a terminal at the root of your project.
```bash
git remote add upstream https://github.com/sussy-code/smov.git
git fetch upstream # Grab the contents of the new remote source
git checkout <YOUR_MAIN_BRANCH>  # Most likely this would be `origin/main`
git merge upstream/main
# * Fix any conflicts present during merge *
git add .  # Add all changes made during merge and conflict fixing
git commit -m "Update sudo-flix instance (merge upstream/main)"
git push  # Push to YOUR repository
```
