const apiEndpoint = "http://localhost:4000/books";

async function displayAllBooks() {
  const books = await fetch(apiEndpoint).then((response) => response.json());

  const bookList = document.getElementById("bookList");

  bookList.innerHTML = "";

  books.forEach((book) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.innerText = book.id;
    tr.appendChild(tdId);

    const tdTitle = document.createElement("td");
    tdTitle.innerText = book.title;
    tr.appendChild(tdTitle);

    const tdDescription = document.createElement("td");
    tdDescription.innerText = book.description;
    tr.appendChild(tdDescription);

    const tdPrice = document.createElement("td");
    tdPrice.innerText = `$${book.price}`;
    tr.appendChild(tdPrice);

    const tdAction = document.createElement("td");
    tdAction.innerText = `<button type="button" class="btn btn-danger" onclick="deleteBook(${book.price})">
    Delete Book
</button>`;
    tr.appendChild(tdAction);

    // Add click listener to each table row to populate the form for update
    tr.addEventListener("click", () => {
      document.getElementById("titleInput").value = book.title;
      document.getElementById("descriptionInput").value = book.description;
      document.getElementById("priceInput").value = book.price;
      document.getElementById("bookIdInput").value = book.id;
    });

    bookList.appendChild(tr);
  });
}

async function addBook(title, description, price) {
  const newBook = {
    title,
    description,
    price,
  };

  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(newBook),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Book added successfully!");
    displayAllBooks();
  } else {
    alert("Failed to add book");
  }
}

async function updateBook(id, title, description, price) {
  const updatedBook = {
    title,
    description,
    price,
  };

  const response = await fetch(`${apiEndpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedBook),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Book updated successfully!");
    displayAllBooks();
  } else {
    alert("Failed to update book");
  }
}

async function deleteBook(id) {
  const response = await fetch(`${apiEndpoint}/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Book deleted successfully!");
    displayAllBooks();
  } else {
    alert("Failed to delete book");
  }
}

const submitButton = document.getElementById("addButton");
submitButton.addEventListener("click", () => {
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descriptionInput").value;
  const price = document.getElementById("priceInput").value;

  addBook(title, description, price);
});

const updateButton = document.getElementById("updateButton");
updateButton.addEventListener("click", () => {
  const id = document.getElementById("idInput").value;
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descriptionInput").value;
  const price = document.getElementById("priceInput").value;

  updateBook(id, title, description, price);
});

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  const id = document.getElementById("idInput").value;

  deleteBook(id);
});

displayAllBooks();
