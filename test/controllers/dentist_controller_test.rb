require "test_helper"

class DentistControllerTest < ActionDispatch::IntegrationTest
  test "should get dentist" do
    get dentist_dentist_url
    assert_response :success
  end
end
