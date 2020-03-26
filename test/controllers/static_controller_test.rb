require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  def setup
    @base_title = "FanFactory"
  end

  test "should get help" do
    get static_help_url
    assert_response :success
    assert_select "title", "Help | #{@base_title}"
  end
end
