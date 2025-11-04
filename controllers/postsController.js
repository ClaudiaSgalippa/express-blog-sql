/**CRUD*/
const db = require("../data/db.js"); /**Connessione a MySQL*/

/**INDEX*/
function index(req, res) { /**Mostra tutti i post*/  
  const sql = "SELECT * FROM posts"; /**Query per prendere tutti i post dal DB*/

  db.query(sql, (err, results) => {
    if (err) 
    return res.status(500).json({ error: "Errore del server" });

    res.json(results); /**Restituiamo i risultati in formato JSON*/
  });
}

///**SHOW*/
//function show(req, res) { /**Mostra un singolo post in base all'ID*/
//  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
//  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/
//  
//  if (!post) { /**Se non troviamo alcun post con quell'ID*/
//    res.status(404); /**Imposta lo status HTTP 404*/
//    return res.json({ /**Sempre in formato JSON*/
//      status: 404, /**Codice errore*/
//      error: "Not Found", /**Tipo di errore*/
//      message: "Post non trovato" /**Messaggio d'errore*/
//    });
//  }
//  
//  res.json(post); /**Se invece esiste, restituiamo il post (sempre in formato JSON)*/
//}
//
///**STORE*/
//function store(req, res) { /**Crea un nuovo post*/
//  const newId = posts[posts.length - 1].id + 1; /**Creazione di un nuovo id, incrementando di +1 quello già presente*/
//  const newPost = {
//    id: newId,
//    title: req.body.title,
//    content: req.body.content,
//    image: req.body.image,
//    tags: req.body.tags
//  }; /**Creiamo un nuovo oggetto post con i dati ricevuti dal body*/
//
//  posts.push(newPost); /**Aggiungiamo il nuovo post all'array esistente*/
//  console.log(posts) /**Check di controllo*/
//
//  res.status(201); /**Restituzione dello stato*/
//  res.json(newPost); /**Restituzione del nuovo post*/
//}
//
///**UPDATE*/
//function update(req, res) { /**Modifica del post tramite ID*/
//  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
//  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/
//
//  if (!post) { /**Se non troviamo alcun post con quell'ID*/
//    res.status(404); /**Imposta lo status HTTP 404*/
//    return res.json({ /**Sempre in formato JSON*/
//      status: 404, /**Codice errore*/
//      error: "Not Found", /**Tipo di errore*/
//      message: "Post non trovato" /**Messaggio d'errore*/
//    });
//  }
//
//  /**Aggiorniamo i campi del post con i nuovi valori ricevuti nel body*/
//  post.title = req.body.title || post.title;
//  post.content = req.body.content || post.content;
//  post.image = req.body.image || post.image;
//  post.tags = req.body.tags || post.tags;
//
//  console.log(posts) /**Check dei post*/
//  res.json(post); /**Restituiamo il post aggiornato*/
//}
//
///**MODIFY*/
//function modify(req, res) { /**Modifica parzialmente del post tramite ID*/
//  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero*/
//  const post = posts.find(post => post.id === id); /**Cerchiamo il post nell'array tramite ID*/
//
//  if (!post) { /**Se non troviamo alcun post con quell'ID*/
//    res.status(404); /**Imposta lo status HTTP 404*/
//    return res.json({ /**Sempre in formato JSON*/
//      status: 404, /**Codice errore*/
//      error: "Not Found", /**Tipo di errore*/
//      message: "Post non trovato" /**Messaggio d'errore*/
//    });
//  }
//
//  /**Aggiorniamo i campi del post con i nuovi valori ricevuti nel body*/
//  req.body.title ? post.title = req.body.title : post.title = post.title;
//  req.body.content ? post.content = req.body.content : post.content = post.content;
//  req.body.image ? post.image = req.body.image : post.image = post.image;
//  req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;
//
//  console.log(posts) /**Check dei post*/
//  res.json(post); /**Restituiamo il post aggiornato*/
//}

/**DESTROY*/
function destroy(req, res) { /**Elimina il post tramite ID*/
  const id = parseInt(req.params.id); /**Recuperiamo l'ID dall'URL e lo trasformiamo in un numero (con parseInt)*/
  const sql = "DELETE FROM posts WHERE id = ?"; /**Prepariamo la query SQL per eliminare un post dal database e utilizziamo il placeholder (?=segnaposto) che verrà sostituito dal valore dell'id. Lo facciamo per evitare rischi di SQL Injection e ci assicuriamo la sicurezza della query*/

  db.query(sql, [id], (err) => { /**Eseguiamo al quey sul db MySQL*/
    if (err) 
      return res.status(500).json({error: "Errore nella cancellazione del post"}); /**Se dà errore, si risponde con lo status 500 (Errore del server)*/

    res.sendStatus(204); /**Se non ci sono errori, l'eliminazione è andata a buon fine e inviamo una risposta senza contenuto*/
  });
}

//module.exports = {index, show, store, update, modify, destroy}; /**Esportiamo tutte le funzioni*/
module.exports = {index, destroy}; /**Esportiamo momentaneamente solo le funzioni necessarie*/