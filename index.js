let thead = document.querySelector("thead");
let dialogol = document.querySelector(".dialogol");
let del = document.querySelector(".del");
let tbody = document.querySelector(".tbody");
let info = document.querySelector(".info");
let dialoginfo = document.querySelector(".dialoginfo");
let hname = document.querySelector(".hname");
let hgorod = document.querySelector(".hgorod");
let hphon = document.querySelector(".hphon");
let dialogedit = document.querySelector(".dialogedit");
let inpname = document.querySelector(".inpname");
let inpgorod = document.querySelector(".inpgorod");
let inpphon = document.querySelector(".inpphon");
let edit = document.querySelector(".edit");
let butadd = document.querySelector(".butadd");
let add = document.querySelector(".add");
let ADDdi = document.querySelector(".ADDdi");
let addname = document.querySelector(".addname");
let addgorod = document.querySelector(".addgorod");
let addphon = document.querySelector(".addphon");
let addbut = document.querySelector(".addbut");
let dark = document.querySelector(".dark");
let body = document.querySelector(".body");
let white = document.querySelector(".white");
let inpsel = document.querySelector(".inpsel");
let inpsell = document.querySelector(".inpsell");
let butsel = document.querySelector(".butsel");
let infodel = document.querySelector(".infodel");
let srch = document.querySelector(".srch");

let data = [
  {
    id: 1,
    name: "Surush Qalandarsho",
    gorod: "Dushanbe",
    phon: "000222000",
    iscopleted: false,
  },
  {
    id: 2,
    name: " jacob jackson.",
    gorod: "Dushanbe",
    phon: "000222000",
    iscopleted: true,
  },
  {
    id: 3,
    name: "Rahimov Abdurahmon",
    gorod: "Dushanbe",
    phon: "000222000",
    iscopleted: true,
  },
];


ADDdi.onclick = () => {
  add.showModal();
};

infodel.onclick = () => {
  dialoginfo.close();
};



addbut.onclick = () => {
  let user = {
    id: new Date().getTime,
    name: addname.value,
    gorod: addgorod.value,
    phon: addphon.value,
    iscopleted: false,
  };
  data.push(user);
  get(data);
  add.close();
};

function get(data) {
  tbody.innerHTML = "";
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    tr.classList.add("tr");
    let tdname = document.createElement("td");
    tdname.innerHTML = elem.name;
    tdname.classList.add("tdname");
    let tdgorod = document.createElement("td");
    tdgorod.innerHTML = elem.gorod;
    tdgorod.classList.add("tdgorod");
    let tdst = document.createElement("td");
    tdst.classList.add("tdst");
    let butst = document.createElement("button");
    if (elem.iscopleted == true) {
      butst.innerHTML = "activ";
      butst.classList.add("butst");
    } else {
      butst.innerHTML = "inactiv";
      butst.classList.add("batst");
    }
    tdst.appendChild(butst);

    let tdphon = document.createElement("td");
    tdphon.innerHTML = elem.phon;
    tdphon.classList.add("tdphon");
    let nqta = document.createElement("button");
    nqta.innerHTML = "▪▪▪";
    nqta.classList.add("nqta");
    nqta.onclick = () => {
      dialogol.showModal();
      del.onclick = () => {
        deluser(elem.id);
      };
      info.onclick = () => {
        infoUser(elem.id);
      };
    };

    edit.onclick = () => {
      editUser(elem.id);
    };

    tr.append(tdname, tdgorod, tdst, tdphon, nqta);
    tbody.append(tr);
  });
}
get(data);

/////SEARCH
srch.oninput = () => {
  let data2 = data.filter((elem) => elem.name.trim().toUpperCase().includes(srch.value.toUpperCase().trim()))
  get(data2)
}

// delet
function deluser(id) {
  data = data.filter((elem) => {
    return elem.id != id;
  });
  get(data);
  dialogol.close();
}

//info
function infoUser(id) {
  dialoginfo.showModal();
  let user = data.find((elem) => elem.id == id);
  hname.innerHTML = user.name;
  hgorod.innerHTML = user.gorod;
  hphon.innerHTML = user.phon;
}

//edit
let idx;
function editUser(id) {
  dialogedit.showModal();
  let user = data.find((elem) => elem.id == id);
  inpname.value = user.name;
  inpgorod.value = user.gorod;
  inpphon.value = user.phon;
  idx = id;
}
butadd.onclick = () => {
  data = data.map((elem) => {
    if (elem.id == idx) {
      elem.name = inpname.value;
      elem.gorod = inpgorod.value;
      elem.phon = inpphon.value;
    }
    return elem;
  });
  get(data);
  dialogedit.close();
  dialogol.close();
};
/////
butadd.onclick = () => {
  let newUser = {
    id: new Date(),
    name: nameAdd.value,
    age: ageAdd.value,
    complete: false,
  };
  data.push(newUser);
  get(data);
  nameAdd.value = "";
  ageAdd.value = "";
};
