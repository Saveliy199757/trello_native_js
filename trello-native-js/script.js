document.querySelectorAll('.column').forEach(Column.process);
App.load()

document.querySelector('[data-action-addColumn]').addEventListener('click', function (event) {
    const columnElement = Column.create()
    
    document.querySelector('.columns').append(columnElement)

    App.save()

})

document.querySelectorAll('.note').forEach(Note.process)
















