import { useState } from "react"


function App() {

  const initialData = {
    author: '',
    title: '',
    body: '',
    public: ''
  }

  const [formData, setFormData] = useState(initialData)

  function handleFormData(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="div container mt-4">
        <div className="div row">
          <div className="div col">
            <form>
              <div className="row g-3 row-cols-2">
                <div className="col">
                  <input
                    className="form-control"
                    placeholder="Autore"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleFormData}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    placeholder="Titolo"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormData}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    placeholder="Testo"
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleFormData}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    placeholder="True o False"
                    type="text"
                    name="public"
                    value={formData.public}
                    onChange={handleFormData}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
