const fs = require("fs");
const ncp = require("ncp").ncp;

const managerFrontEndBasePath = "../manager/frontend/static";
const frontEndBuildPath = "../frontend/build";

function removeStaticFolder() {
    if (fs.existsSync(managerFrontEndBasePath)) {
        fs.rmSync(managerFrontEndBasePath, { recursive: true });
        console.log(`✅ Removed ${managerFrontEndBasePath}`);
    }
}

function restructureIndexHtml() {

    function updateHtmlFile() {
        const source = `${managerFrontEndBasePath}/index.html`;
        const data = fs.readFileSync(source).toString();
        let result = data.replace('href="/manifest.json"', 'href="/static/manifest.json"');
        result = result.replace('href="/logo192.png"', 'href="/static/logo192.png"')
        result = result.replace('href="/favicon.ico"', 'href="/static/favicon.ico"')
        fs.writeFileSync(source, result);
        console.log(`✅ Updated ${source} static file paths`);
    }

    updateHtmlFile();
    const source = `${managerFrontEndBasePath}/index.html`;
    const destination = "../manager/frontend/templates/index.html";

    fs.rename(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }

        console.log("✅ Restructured index.html");
        console.log("========================================================");
        console.log("✅ Finished moving web build folder");
        console.log("========================================================");
    });
}

function restructureJs() {
    const source = `${managerFrontEndBasePath}/static/js`;
    const destination = `${managerFrontEndBasePath}/js`;

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        fs.rmSync(source, { recursive: true });
        console.log("✅ Restructured js files");
        restructureIndexHtml();
    });
}

function restructureCss() {
    const source = `${managerFrontEndBasePath}/static/css`;
    const destination = `${managerFrontEndBasePath}/css`;

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        fs.rmSync(source, { recursive: true });
        console.log("✅ Restructured css files");
        restructureJs();
    });
}

function moveWebBuild() {
    ncp(frontEndBuildPath, managerFrontEndBasePath, function (err) {
        console.log(`✅ Copied files from ${frontEndBuildPath} to ${managerFrontEndBasePath}`);
        restructureCss();
    });
}

function main() {
    console.log("========================================================");
    console.log("Begin Moving Front End Files to Django Project");
    console.log("========================================================");
    removeStaticFolder();
    moveWebBuild();
}

main();
