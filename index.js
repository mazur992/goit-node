import contactsService from "./contacts.js";
import yargs from "yargs";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContacts = await contactsService.getContactById(id);
      console.log(oneContacts);
      break;

    case "add":
      const newMovies = await contactsService.addContact(name, email, phone);
      console.log(newMovies);
      break;

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
