#include <bits/stdc++.h>
using namespace std;

/*
Performs Depth-First Search on an undirected graph using recursion.
Input format (from stdin):
  n m           -> number of vertices (0..n-1) and number of edges
  u v (x m)    -> m lines of edges (0-indexed)
  s             -> source vertex to start DFS

Example:
  5 5
  0 1
  0 2
  1 3
  1 4
  3 4
  0
*/

void depthFirstSearchRecursive(
    int currentVertex,
    const vector<vector<int>> &adjacencyList,
    vector<bool> &visited,
    vector<int> &visitOrder
) {
    visited[currentVertex] = true;
    visitOrder.push_back(currentVertex);

    for (int neighbor : adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
            depthFirstSearchRecursive(neighbor, adjacencyList, visited, visitOrder);
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int numVertices, numEdges;
    if (!(cin >> numVertices >> numEdges)) {
        cerr << "Failed to read n and m.\n";
        return 1;
    }

    vector<vector<int>> adjacencyList(numVertices);
    for (int i = 0; i < numEdges; ++i) {
        int vertexU, vertexV;
        cin >> vertexU >> vertexV;
        if (vertexU < 0 || vertexU >= numVertices || vertexV < 0 || vertexV >= numVertices) {
            cerr << "Edge vertex out of range: " << vertexU << " " << vertexV << "\n";
            return 1;
        }
        adjacencyList[vertexU].push_back(vertexV);
        adjacencyList[vertexV].push_back(vertexU); // undirected graph
    }

    int sourceVertex;
    cin >> sourceVertex;
    if (sourceVertex < 0 || sourceVertex >= numVertices) {
        cerr << "Source vertex out of range.\n";
        return 1;
    }

    for (int vertex = 0; vertex < numVertices; ++vertex) {
        sort(adjacencyList[vertex].begin(), adjacencyList[vertex].end());
    }

    vector<bool> visited(numVertices, false);
    vector<int> visitOrder;
    depthFirstSearchRecursive(sourceVertex, adjacencyList, visited, visitOrder);

    cout << "DFS order:";
    for (int vertex : visitOrder) {
        cout << ' ' << vertex;
    }
    cout << '\n';

    return 0;
}



