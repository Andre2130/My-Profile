class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.all
        render json: @projects
      end
    
      def create
        @project = Project.create!(project_params)
    
        render json: @project
      end
    
      def show
        @project = Project.find(params[:id])
    
        render json: @project
      end
    
      def update
        @project = Project.find(params[:id])
        @project.update!(project_params)
    
        render json: @project
      end
    
      def destroy
        @project = Project.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def project_params
        params.require(:project).permit(:name, :site_url, :photo_url)
      end
    end