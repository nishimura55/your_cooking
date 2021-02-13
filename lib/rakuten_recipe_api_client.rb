require 'net/https'

class RakutenRecipeApiClient
  BASE_URL = "https://app.rakuten.co.jp/services/api/Recipe/".freeze

  class << self
    def get_recipes(category_id)
      endpoint = "CategoryRanking/20170426"
      RakutenRecipeApiClient.new.get_recipes(endpoint, category_id)
    end
  end

  def get_recipes(endpoint, category_id)
    uri = URI.parse(BASE_URL).tap { |uri| uri.path += endpoint }
    set_query(uri, category_id)
    request = Net::HTTP::Get.new(uri.request_uri)
    response = http_client.request(request)
    response.value #レスポンスが2xx(成功)でなかった場合raise
    JSON.parse(response.body)["result"]
  end

  private

  def http_client
    uri = URI.parse(BASE_URL)
    http_client = Net::HTTP.new(uri.host, uri.port)
    http_client.use_ssl = true
    http_client
  end

  def set_query(uri, category_id)
    params = {
      "format" => "json",
      "applicationId" => "#{ENV['RAKUTEN_APPLICATION_ID']}",
      "categoryId" => category_id.to_s,
      "elements" => "recipeTitle,recipeUrl",
    }
    uri.query = URI.encode_www_form(params)
  end
end
