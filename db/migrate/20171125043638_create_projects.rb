class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :site_url
      t.string :photo_url

      t.timestamps
    end
  end
end
