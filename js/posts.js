posts = [
    {
        id:"gitOverHere",
        img:"./img/scorp-octodex-blog-02.jpg",
        date:"9/22/2021",
        votes:"28",
        week: 1,
        rating: 3,
        title:"Git Over Here!",
        subTitle: "My First Week at Awesome Inc.",
        keywords:["Awesome Inc.","GitHub","F21","DFTBA"],
        views:25,
        htmlContent:`
            <p>This week I began the <a href="https://www.awesomeinc.org/bootcamp" alt="Awesome Inc Coding Bootcamp"><b>Awesome Inc Coding Bootcamp</b></a> and so far I'm very impressed! I learned about an online IDE called <a href="https://codeanywhere.com/" alt="CodeAnywhere"><b>CodeAnywhere</b></a>, which is very akin to VS Code, save that it is written entirely in javascript (very cool), as well as receiving an extensive refresher on using <a href="https://github.com/" alt="GitHub"><b>GitHub</b></a>!</p>
            <p>I've used GitHub in the past when I was a front-end web developer, but never as in-depth as they are teaching me it can be utilized. As well as, I'm learning that the amount of things you can forget in 6 years is shocking.</p>
            <hr>
            <img class="card-image image-fluid shadow" src="./img/forgot.jpg" alt="Forgot alot!">
            <hr>
            <p class="text-center"><i>6 years is a long time!</i></p>
            <hr>
            <p>The focus of this article will be to detail out what I have learned in regards to Git and GitHub.</p>
            <hr>
            <br>
            <h2>The Process of Utilizing GitHub</h2>
            <ul>
                <li>Initialize Your Local Repository.</li>
                <li>Check the Status of Your Local Repository.</li>
                <li>Create Content to be Pushed.</li>
                <li>Add Files to be Committed.</li>
                <li>Commit Your Changes.</li>
                <li>Create an Empty Repository on the GitHub Server.</li>
                <li>Setup Your Branch.</li>
                <li>Assign Your Origin URL</li>
                <li>Push Your New Content Up to The GitHub Server.</li>
                <li>Create a "Dev" Branch</li>
                <li>Make Changes, Add, Commit, Push, Wash Rinse and Repeat.</li>
                <li>Execute a Pull Request on Your Content.</li>
                <li>Merge your changes into the main branch.</li>
            </ul>
            <hr>
            <br>
            <h2>Initialize Your Local Repository</h2>
            <p>It's the simplest of things that make all the difference. This eight character command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git init</code><br>
            <p>...is where it all begins. With it you can "Create an empty Git repository or reinitialize an existing one." <a href="https://git-scm.com/docs/git-init"><b>¹</b></a> In short, it makes it possible to create branches, commit changes, push said changes up to the server, and so much more! None of this would be able to be done without first initializing a local repository. </p><hr>
            <h6> <i>¹ From: <a href="https://git-scm.com/docs/git-init">https://git-scm.com/docs/git-init</a></i></h6>
            <hr>
            <br>
            <h2>Check The Status of Your Local Repository.</h2>
            <p>It is important to be able to see the difference between what you have on your local repo and your repo on Github. To do this you will use...</p>
            <code class="bg-dark p-3 d-block shadow">$ git status</code><br>
            <p>This is a very useful command. What it does is "Show the working tree status." <a href="https://git-scm.com/docs/git-status">²</a> It allows you to see what is committed, what is yet to be committed and what needs to be added to be included in your next commit.</p>
            <hr>
            <img class="shadow img-fluid" src="img/git-status.jpg" alt="Git status output.">
            <hr>
            <p class="text-center"><i>Git status output.</i></p>
            <hr>
            <h6> <i>² From: <a href="https://git-scm.com/docs/git-status">https://git-scm.com/docs/git-status</a></i></h6>
            <hr>
            <br>
            <h2>Create content to be pushed.</h2>
            <p>With out local repo initialized we can create some dummy content to work with. This will give us something to <code>add</code>, <code>commit</code>, and <code>push</code> to the GitHub server. To achieve this, all we need to do is enter the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ touch README.md</code><br>
            <p>With <code>touch</code> we can "change file access and modification times"<a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/touch.html"><i>³</i></a> of a file. What makes this particularly useful, is that if we specify a file that does not exist, it will create it. We can confirm that it executed successfuly by issuing the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ ls</code><br>
            <p>This will "list directory contents"<a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/ls.html"><i>⁴</i></a>. Now that that is out of the way let's continue.</p><hr>
            <h6> <i>³ From: <a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/touch.html">https://pubs.opengroup.org/onlinepubs/9699919799/utilities/touch.html</a></i></h6><br><h6><i>⁴ From:<a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/ls.html"> https://pubs.opengroup.org/onlinepubs/9699919799/utilities/ls.html</a></i></h6>
            <hr>
            <br>
            <h2>Add Files to be Committed.</h2>
            <p>Now, we will look into how to update the index with the changes we've made to the working tree. This is done with the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git add -A</code><br>
            <p>This command allows us to "Add file contents to the index" <a href="https://git-scm.com/docs/git-add"><i>⁵</i></a>. Without it Git would not know that we wanted to include the changes we've made into the next commit. The option <code>-A</code> lets Git know that we want it to look at all of the files that are indexed and add the ones that differ from the working tree *(eg. The files we've changed)*.</p><hr>
            <h6> <i>⁵ From: <a href="https://git-scm.com/docs/git-add">https://git-scm.com/docs/git-add</a></i></h6>
            <hr>
            <br>
            <h2>Commit Your Changes.</h2>
            <p>Okay, now that we have added our changes to the index it is time to record/commit them to the repository. This is done using the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git commit -m "message"</code><br>
            <p>It's used to "Record changes to the repository" <a href="https://git-scm.com/docs/git-commit"><i>⁶</i></a>. You can see that the <code>git commit</code> command is followed by the option <code>-m "message"</code>, this is used to enter a description of the changes that are being recorded to the repository.</p>
            <hr>
            <img class="shadow img-fluid" src="img/git-commit.jpg" alt="Git commit output.">
            <hr>
            <p class="text-center"><i>Git commit output.</i></p><hr>
            <h6> <i>⁶ From: <a href="https://git-scm.com/docs/git-commit">https://git-scm.com/docs/git-commit</a></i></h6>
            <hr>
            <br>
            <h2>Create an Empty Repository on The GitHub Server</h2>
            <p>When you first login to GitHub you will be on the "Overview" tab. From here you will want to navigate to the "Repository" tab.</p>
            <hr>
            <img class="shadow img-fluid" src="img/gitHub-overview.jpg" alt="Overview tab.">
            <hr>
            <p class="text-center"><i>Overview tab.</i></p>
            <hr>
            <p>From the Repository page, click on the "New" button.</p>
            <hr>
            <img class="shadow img-fluid" src="img/gitHub-repository.jpg" alt="Repository tab.">
            <hr>
            <p class="text-center"><i>Repository tab.</i></p>
            <hr>
            <p>Here you will give your new repository a name and select any additional options for it.</p>
            <p><i>(Note: Name is the only required field for creating a new repository.)</i></p>
            <p>With the name field filled out, you can now click the "Create repository" button.</p>
            <hr>
            <img class="shadow img-fluid" src="img/gitHub-newRepository.jpg" alt="New repository page.">
            <hr>
            <p class="text-center"><i>New repository page.</i></p>
            <hr>
            <p>And thats it! GitHub will automatically redirect you into your new repo. You can start pushing and pulling content from your development environment to your new repository!</p>
            <p>Now we will go back to your CLI so that we can start wrapping up the setup for your new repository.</p>
            <hr>
            <br>
            <h2>Setup Your Branch</h2>
            <p>Next we need to set the active branch that Git will use to the name of the branch we will be pushing our inital content up to. This is where we use the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git branch -M main</code><br>
            <p>What the <code>git branch</code> command does is "List, create, or delete branches" <a href="https://git-scm.com/docs/git-branch"><i>⁷a</i></a>. the option <code>-M</code> <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--M"><i>⁷b</i></a> is a combination of two options:</p>
            <ul>
            <li> <code>--move</code> : "Move/rename a branch and the corresponding reflog." <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--move"><i>⁷c</i></a></li>
            <li><code>--force</code> : "Reset 'branchname' to 'startpoint', even if 'branchname' exists already." <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--force"><i>⁷d</i></a></li>
            </ul>
            <p>So in essence, this will create a new branch in our development environment and sets it's name to be <code>main</code>.</p> <hr>
            <h6><i>
                ⁷a From: <a href="https://git-scm.com/docs/git-branch">https://git-scm.com/docs/git-branch</a><br>
                ⁷b From: <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--M">https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--M</a><br>
                ⁷c From: <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--move">https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--move</a><br>
                ⁷d From: <a href="https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--force">https://git-scm.com/docs/git-branch/#Documentation/git-branch.txt--force</a>
            </i></h6>
            <hr>
            <br>
            <h2>Assign Your Origin URL</h2>
            <p>Next we need to setup which repository to track at a remote location. Specifically we want to track our new repository on GitHub. To do this we will use the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git remote add origin URL</code><br>
            <p>With this command we can "Manage set of tracked repositories" <a href="https://git-scm.com/docs/git-remote"><i>⁸a</i></a>. The <code>add</code> command will "Add a remote named 'name' for the repository at 'url'." <a href="https://git-scm.com/docs/git-remote/#Documentation/git-remote.txt-emaddem"><i>⁸b</i></a>() In this case our 'name' will be <code>origin</code>, and our remote repository will be the <code>URL</code> to our repo on GitHub!.</p>
            <p>We can easily obtain the URL by going to the "Code" tab for our repo on GitHub. Then we simple click on the green "Code" button and when the context menu drops down, we click the copy to clipboard button located next to the input field with the URL in it.</p>
            <hr>
            <img src="img/gitHub-repoUrl.jpg" alt="Copy repository URL">
            <hr>
            <p class="text-center"><i>Copy repository URL</i></p>
            <hr>
            <h6> <i>⁸a From: <a href="https://git-scm.com/docs/git-remote">https://git-scm.com/docs/git-remote</a><br>⁸b From: <a href="https://git-scm.com/docs/git-remote/#Documentation/git-remote.txt-emaddem">https://git-scm.com/docs/git-remote/#Documentation/git-remote.txt-emaddem</a></i></h6>
            <hr><br>
            <h2>Push Your New Content Up to The GitHub Server.</h2>
            <p>You are finally ready to populate your GitHub repo with content from your development environment! To do this all you need to do is execute the command...</p>
            <code class="bg-dark p-3 d-block shadow">$ git push -u origin main</code><br>
            <p>This command will "Update remote refs along with associated objects" <a href="https://git-scm.com/docs/git-push"><i>⁹</i></a>. In other words, it will push all of the changes you have committed upstream (<code>-u</code>), to the <code>main</code> branch of your GitHub repository located at the URL stored in <code>origin</code>.</p>
            <p>Your CLI will prompt you for your GitHub username and password. Once entered your changes will be pushed up to your GitHub repo!</p>
            <hr>
            <img src="img/git-push.jpg" alt="Git push output">
            <hr>
            <p class="text-center"><i>Git push output</i></p>
            <hr>
            <p>You can set up a SSH Key to get around having to enter your credentials in everytime you make a push. <a href="https://www.loom.com/share/5bb573ac904640c99934b40c9961d83d">This great video</a> from <b>Awesome Inc</b>'s Ian Rios demonstrates how to achieve this.</p><hr>
            <h6> <i>⁹ From: <a href="https://git-scm.com/docs/git-push">https://git-scm.com/docs/git-push</a></i></h6>
            <hr>
            <br>
            <h2>Create a Dev Branch</h2>
            <p>Now that we have some content up on the GitHub server we can create a development branch to work off of. This way we can make changes to our files and commit them to the server without affecting our main branch. This will provide a buffer for us, just in case there are any mistakes or errors in our changes. </p>
            <p>This is done on the GitHub website on the repository's page, under the "Code" tab. </p>
            <p>Once there, click on the branch dropdown button. It will be set to main by default.</p>
            <p>Now click inside the text input box and enter in the name of our new branch, in this case "dev".</p>
            <p>Lastly, click "Create branch dev from 'main'".</p>
            <hr>
            <img src="img/gitHub-createBranch.jpg" alt="Create dev branch">
            <hr>
            <p class="text-center">Create dev branch</p>
            <hr>
            <p>GitHub will create your new branch and redirect you to that branches page. You can verify that it successfully created your new branch by looking at the branch dropdown button. It should read "dev" now instead of "main".</p>
            <hr><br>
            <h2>Make Changes, Add, Commit, Push, Wash Rinse and Repeat.</h2>
            <p>It is time to get used to the development cycle. To start let's add some content to our empty README.md file.</p>
            <code class="d-block bg-dark p-3">
                | Name | Date | Description |<br>
                |---|---|---|<br>
                | Michael Chinn | 8/30/2021 | This is a generic description. |
            </code>
            <p>Now that we've made some changes its time to execute commands we have already touched upon.</p>
            <code class="bg-dark p-3 d-block shadow">
                $ git add -A
                <br>
                $ git commit -m "Updated README.md"
                <br>
                $ git push -u origin dev
            </code><br>
            <p>Enter your username and password and that's it! You will just repeat this process of <code>add</code>, <code>commit</code>, and <code>push</code> until you are satisfied with all of the changes you have made.</p>
            <p>Next we shall dive into the process of taking the work performed in your dev branch and getting it to the main branch.</p>
            <hr>
            <br>
            <h2>Execute a Pull Request on Your Content.</h2>
            <p>Now that we have pushed our content up to GitHub, we can create a pull request. With the pull request we can "Fetch from and integrate with another repository or a local branch" <a href="https://git-scm.com/docs/git-pull"><i>¹⁰</i></a>. In other words you will pull the content from your dev branch to your main branch. This is done from the GitHub website.</p>
            <p>From here we can click on the compare an pull request button.</p>
            <hr>
            <img src="img/gitHub-pull.jpg" alt="GitHub pull request">
            <hr>
            <p class="text-center"><i>GitHub pull request.</i></p>
            <hr>
            <br>
            <h2>Merge Your Changes Into the Main Branch.</h2>
            <p>What's really <b>Awesome</b> is that in the past, I never learned to use the GitHub website beyond cloning repos and viewing files. The majority of my experience with it was through a CLI, so it was a real treat to learn the ins and outs of it.</p>
            <p>I thank God that I have access to all of the knowledge and experience of the instructors. I can tell that the Bootcamp is going to be a real game changer for me. :)</p>
        `
    },{
        id:"pathLessTraveled",
        img:"./img/path-blog.jpg",
        date:"9/22/2021",
        votes:"28",
        week: 2,
        rating: 3,
        title:"The path less traveled.",
        subTitle: "The struggle is good.",
        keywords:["Awesome Inc.","GitHub","F21","DFTBA"],
        views:25,
        htmlContent:` 
            <p class="card-text">I **love** retro gaming! From the Atari 2600 to the Sony Playstation 2, I love it all. One thing that I wish that I could do...</p>
        `
    },
]