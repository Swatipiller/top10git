$(document).ready(function () {
  $(".add-customer-btn").click(function () {
    let newCustomerRow = ` <div class="row review-invitation-item">
                      <div class="col-6">
                        <div class="mb-3">
                          <label
                            for="username"
                            class="form-label visually-hidden"
                            >Name</label
                          >
                          <input
                            type="text"
                            class="form-control border-0 custom-box-shadow"
                            id="username"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-3">
                          <label
                            for="useremail"
                            class="form-label visually-hidden"
                            >Email</label
                          >
                          <input
                            type="email"
                            class="form-control border-0 custom-box-shadow"
                            id="useremail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>`;

    $(".review-invitation-group").append(newCustomerRow);
  });
});

$(document).ready(function () {
  $(".promotion-add-customer-btn").click(function () {
    let promotionCustomerRow = `<div class="row review-promotion-item">
                  <div class="col-6">
                    <div class="mb-3">
                      <label
                        for="username"
                        class="form-label visually-hidden"
                        >Name</label
                      >
                      <input
                        type="text"
                        class="form-control border-0 custom-box-shadow"
                        id="username"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label
                        for="useremail"
                        class="form-label visually-hidden"
                        >Email</label
                      >
                      <input
                        type="email"
                        class="form-control border-0 custom-box-shadow"
                        id="useremail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>`;
    $(".review-promotion-group").append(promotionCustomerRow);
  });
});
