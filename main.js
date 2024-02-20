window.addEventListener("DOMContentLoaded", () => {
  /*catch general sections*/
  const d = document,
    main = d.querySelector("main"),
    aside = d.querySelector("aside"),
    header = d.querySelector("header"),
    footer = d.querySelector("footer");

  /*Header*/
  header
    .querySelector(".head-name")
    .insertAdjacentHTML(
      "afterbegin",
      `${data.name.firstName} ${data.name.lastName}`
    );
  header.querySelector(".g-info").insertAdjacentHTML(
    "beforeend",
    `<h4>${data.position.map((item) => `<span>${item}</span>`)
      .join(`<div class="circle"></div>
        `)}</h4>`
  );

  /*Aside*/
  /*make header padding*/
  aside.style.paddingTop = main.style.paddingTop = `${
    header.offsetHeight / 16
  }rem`;

  aside
    .querySelector(".photo")
    .insertAdjacentHTML(
      "afterbegin",
      `<img src="${data.photoPath}" alt="myPhoto">`
    );
  aside
    .querySelector(".lang_section")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="lang-tags">${data.makeLanguages()}</div>`
    );
  aside
    .querySelector(".skill-tags")
    .insertAdjacentHTML("afterbegin", `${data.makeSkills()}`);
  aside
    .querySelector(".hobby-tags")
    .insertAdjacentHTML("beforeend", `${data.makeInterests()}`);
  aside
    .querySelector(".contact-items")
    .insertAdjacentHTML("afterbegin", `${data.makeContacts()}`);

  /*Main*/
  main
    .querySelector(".myStory")
    .insertAdjacentHTML("beforeend", `${data.makeMyStory()}`);
  main
    .querySelector(".experience")
    .insertAdjacentHTML("beforeend", `${data.makeWorkExperience()}`);
  main
    .querySelector(".education")
    .insertAdjacentHTML("beforeend", `${data.makeEducation()}`);
  main
    .querySelector(".educationCourse")
    .insertAdjacentHTML("beforeend", `${data.makeEducationCourses()}`);

  /*Footer*/
  footer
    .querySelector(".socials")
    .insertAdjacentHTML("afterbegin", `${data.makeSocialLinks()}`);
});
