const etudiants = [
    { nom: 'Kone', prenom: 'Aminata', age: 20 },
    { nom: 'Diallo', prenom: 'Moussa', age: 17 },
    { nom: 'Toure', prenom: 'Fatou', age: 19 },
    { nom: 'Bamba', prenom: 'Seydou', age: 16 }
];

const container = document.getElementById('container');

// Create and add the title h1
const title = document.createElement('h1');
title.className = 'text-3xl font-bold mb-6';
title.innerText = 'Welcome to Activity 12';
container.appendChild(title);

// Create the table
const table = document.createElement('table');
table.className = 'w-full table-auto border-collapse text-left text-sm text-slate-600';

// Create the thead
const thead = document.createElement('thead');
thead.className = 'bg-slate-50 text-xs font-semibold uppercase text-slate-700';

const studentHeader = `
    <tr>
        <th class="px-6 py-4">Nom</th>
        <th class="px-6 py-4">Prenom</th>
        <th class="px-6 py-4">Age</th>
    </tr>
`;

thead.innerHTML = studentHeader;

table.appendChild(thead);

// Create the tbody
const tbody = document.createElement('tbody');
tbody.className = 'divide-y divide-slate-200 bg-white';

// Create the tbody lines
etudiants.forEach(etudiant => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-teal-50 transition-colors';

    const columns = `
        <td class="px-6 py-4 font-medium text-slate-900">
            ${etudiant.nom}
        </td>
        <td class="px-6 py-4">${etudiant.prenom}</td>
        <td class="px-6 py-4">${etudiant.age}</td>
    `;

    tr.innerHTML = columns;
    tbody.appendChild(tr);
});

table.appendChild(tbody);

container.appendChild(table);
