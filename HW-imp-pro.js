// imperative vs declarative DOM creation

// imperative
const p = document.createElement('p');
p.innerText = 'hello world';
document.body.appendChild(p);

// declarative
document.body.innerHTML = '<p>hello world</p>';


// list example 
// imperative
const list = document.createElement('ul');
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerText = i;
    list.appendChild(li);
    }
document.body.appendChild(list);

// declarative
document.body.innerHTML = '<ul><li>0</li><li>1</li><li>2</li></ul>';

// HOMEWORK: 

// 1. in imperative style create a div with a class of "container" and append it to the body
// 2. in imperative style create a div with a class of "row" and append it to the container
// 3. in imperative style create a div with a class of "col" and append it to the row

// 4. in declarative style create a div with a class of "container" and append it to the body
// 5. in declarative style create a div with a class of "row" and append it to the container
// 6. in declarative style create a div with a class of "col" and append it to the row

