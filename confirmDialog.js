$(function () {
  $.widget("custom.confirmDialog", {
    _create: function () {
      this.element
        .addClass("modal fade")
        .attr({ tabindex: "-1", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" })
        .append(
          $("<div>", {
            class: "modal-dialog",
          }).append(
            $("<div>", {
              class: "modal-content",
            })
              .append(
                $("<div>", {
                  class: "modal-header",
                })
                  .append(
                    $("<h1>", {
                      class: "modal-title fs-5",
                      attr: { id: "exampleModalLabel" },
                      text: "Modal title",
                    })
                  )
                  .append(
                    $("<button>", {
                      class: "btn-close",
                      type: "button",
                      attr: { "data-bs-dismiss": "modal", "aria-label": "Close" },
                    })
                  )
              )
              .append(
                $("<div>", {
                  class: "modal-body",
                  text: "hello body",
                })
              )
              .append(
                $("<div>", {
                  class: "modal-footer",
                })
                  .append(
                    $("<button>", {
                      class: "btn btn-secondary",
                      type: "button",
                      attr: { "data-bs-dismiss": "modal" },
                      text: "Close",
                    })
                  )
                  .append(
                    $("<button>", {
                      class: "btn btn-primary",
                      type: "button",
                      text: "Save changes",
                    })
                  )
              )
          )
        );

      this.myModel = new bootstrap.Modal(this.element.get(0), { keyboard: false });
    },
    openDialog: function () {
      this.myModel.show();
    },
  });
});
